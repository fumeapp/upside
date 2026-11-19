import { LIFT_INTERESTS } from "~~/shared/schemas/consultation";

export type LiftInterest = (typeof LIFT_INTERESTS)[number];

export const useConsultationModal = () => {
  const open = useState<boolean>("consultation-modal-open", () => false);
  const selectedProduct = useState<LiftInterest>(
    "consultation-modal-product",
    () => "Not Sure Yet — Help Me Choose",
  );
  const preselectOcSpecial = useState<boolean>("consultation-modal-oc-special", () => false);

  const openConsultation = (options?: { product?: LiftInterest; ocSpecial?: boolean }) => {
    if (options?.product) {
      selectedProduct.value = options.product;
    } else {
      selectedProduct.value = "Not Sure Yet — Help Me Choose";
    }
    preselectOcSpecial.value = Boolean(options?.ocSpecial);
    open.value = true;
  };

  return {
    open,
    selectedProduct,
    preselectOcSpecial,
    openConsultation,
  };
};
