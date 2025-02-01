import * as React from "react";
import Themelayout from "~/components/theme-layout";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Text } from "~/components/ui/text";

const DialogExample = () => {
  return (
    <Themelayout className="items-center justify-center">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">
            <Text>Edit Profile</Text>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button>
                <Text>OK</Text>
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Themelayout>
  );
};

export default DialogExample;
