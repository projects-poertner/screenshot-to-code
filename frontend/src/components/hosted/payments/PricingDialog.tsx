import React from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../../ui/dialog";
import { useStore } from "../../../store/store";
import PricingPlans from "./PricingPlans";


const PricingDialog: React.FC = () => {
  const [showDialog, setShowDialog] = useStore((state) => [
    state.isPricingDialogOpen,
    state.setPricingDialogOpen,
  ]);

  return (
    <Dialog open={showDialog} onOpenChange={(isOpen) => setShowDialog(isOpen)}>

      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-3xl text-center">
            Ship Code Faster
          </DialogTitle>
        </DialogHeader>

        <PricingPlans />

        <DialogFooter></DialogFooter>

      </DialogContent>
    </Dialog>
  );
};

export default PricingDialog;
