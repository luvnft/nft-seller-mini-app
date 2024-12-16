import { zodResolver } from "@hookform/resolvers/zod";
import { Address } from "@ton/core";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { getAddressFromDeepLink, tryParseAddress } from "@/lib/ton";
import { useCurrentNft } from "@/hooks/queries/useCurrentNft";
import { qrScanner } from "@telegram-apps/sdk-react";
import { useNftTransfer } from "@/hooks/transactions/useNftTransfer";
import { useTonConnect } from "@/hooks/useTonConnect";

const formSchema = z.object({
  address: z.string().refine((arg) => {
    if (!tryParseAddress(arg)) return false;

    return true;
  }, "Wrong address"),
});

export function AddressForm() {
  const nft = useCurrentNft();
  const { transfer, isLoading } = useNftTransfer(nft);
  const { connected } = useTonConnect();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      address: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (!nft) return;

    transfer(Address.parse(values.address));
  };

  const onScanQRClick = () => {
    qrScanner.open({
      text: "Scan TON deeplink QR",
      capture: (text) => {
        const address = getAddressFromDeepLink(text);
        if (address && tryParseAddress(address)) {
          form.setValue("address", address);
          form.trigger("address");
        }

        return true;
      },
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>TON Address</FormLabel>
              <FormControl>
                <Input placeholder="Input recipient..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="space-y-4">
          <Button
            type="submit"
            className="w-full"
            disabled={isLoading && connected}
          >
            Transfer NFT
          </Button>
          <p
            onClick={onScanQRClick}
            className="text-center text-tg-link-foreground"
          >
            Scan QR
          </p>
        </div>
      </form>
    </Form>
  );
}
