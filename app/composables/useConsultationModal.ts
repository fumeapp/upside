import { LIFT_INTERESTS } from "~~/shared/schemas/consultation";

export type LiftInterest = (typeof LIFT_INTERESTS)[number];

export const useConsultationModal = () => {
  const open = useState<boolean>("consultation-modal-open", () => false);
  const selectedProduct = useState<LiftInterest>(
    "consultation-modal-product",
    () => "Not Sure Yet — Help Me Choose",
  );
  const preselectVeteranSpecial = useState<boolean>(
    "consultation-modal-veteran-special",
    () => false,
  );

  const openConsultation = (options?: { product?: LiftInterest; veteranSpecial?: boolean }) => {
    if (options?.product) {
      selectedProduct.value = options.product;
    } else {
      selectedProduct.value = "Not Sure Yet — Help Me Choose";
    }
    preselectVeteranSpecial.value = Boolean(options?.veteranSpecial);
    open.value = true;
  };

  return {
    open,
    selectedProduct,
    preselectVeteranSpecial,
    openConsultation,
  };
};
