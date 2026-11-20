<script setup lang="ts">
import type { FormSubmitEvent } from "@nuxt/ui";
import {
  CONTACT_METHODS,
  LIFT_INTERESTS,
  consultationSchema,
  type ConsultationInput,
} from "~~/shared/schemas/consultation";
import type { LiftInterest } from "~/composables/useConsultationModal";

const props = withDefaults(
  defineProps<{
    initialProduct?: LiftInterest;
    initialVeteranSpecial?: boolean;
    compact?: boolean;
    submitLabel?: string;
  }>(),
  {
    initialProduct: "Not Sure Yet — Help Me Choose",
    initialVeteranSpecial: false,
    compact: false,
    submitLabel: "Get Your Free Consultation",
  },
);

const emit = defineEmits<{
  submitted: [];
}>();

const toast = useToast();
const loading = ref(false);
const submitted = ref(false);
const errorMessage = ref("");

const state = reactive<ConsultationInput>({
  firstName: "",
  lastName: "",
  phone: "",
  zipCode: "",
  email: "",
  contactMethod: "Phone Call",
  productInterest: props.initialProduct,
  comments: "",
  veteranSpecial: props.initialVeteranSpecial,
  smsOptIn: false,
  website: "",
});

watch(
  () => props.initialProduct,
  (val) => {
    if (val) state.productInterest = val;
  },
);

watch(
  () => props.initialVeteranSpecial,
  (val) => {
    state.veteranSpecial = Boolean(val);
  },
);

const contactMethodItems = [...CONTACT_METHODS];
const productInterestItems = [...LIFT_INTERESTS];

const submittedSummary = ref<{ firstName: string; contactMethod: string } | null>(null);

async function onSubmit(event: FormSubmitEvent<ConsultationInput>) {
  loading.value = true;
  errorMessage.value = "";

  try {
    await $fetch("/api/consultation", {
      method: "POST",
      body: event.data,
    });

    submittedSummary.value = {
      firstName: event.data.firstName,
      contactMethod: event.data.contactMethod,
    };
    submitted.value = true;

    toast.add({
      title: "Consultation request received",
      description: "Jeff Cullen will be in touch shortly.",
      icon: "i-lucide-check-circle",
      color: "primary",
    });

    emit("submitted");
  } catch (err: unknown) {
    const fetchErr = err as { data?: { message?: string }; statusMessage?: string };
    errorMessage.value =
      fetchErr?.data?.message ||
      fetchErr?.statusMessage ||
      "We couldn't send your request right now. Please call Jeff directly at 949.235.4536.";
  } finally {
    loading.value = false;
  }
}

function resetForm() {
  state.firstName = "";
  state.lastName = "";
  state.phone = "";
  state.zipCode = "";
  state.email = "";
  state.contactMethod = "Phone Call";
  state.productInterest = props.initialProduct;
  state.comments = "";
  state.veteranSpecial = props.initialVeteranSpecial;
  state.smsOptIn = false;
  state.website = "";
  errorMessage.value = "";
  submitted.value = false;
}
</script>

<template>
  <div v-if="submitted && submittedSummary" class="space-y-5 py-6 text-center">
    <div
      class="bg-primary-100 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 mx-auto flex size-14 items-center justify-center rounded-full"
    >
      <UIcon name="i-lucide-check" class="size-7" />
    </div>

    <div class="space-y-2">
      <h3 class="text-highlighted text-xl font-bold tracking-tight">
        Thank you, {{ submittedSummary.firstName }}!
      </h3>
      <p class="text-muted mx-auto max-w-md text-sm leading-relaxed">
        Your free consultation request has been sent directly to Jeff Cullen at Upside Home Lifts.
        We'll follow up via
        <span class="text-highlighted font-medium">{{ submittedSummary.contactMethod }}</span>
        shortly.
      </p>
    </div>

    <div class="flex flex-wrap items-center justify-center gap-3 pt-2">
      <UButton
        label="Call 949.235.4536 Now"
        icon="i-lucide-phone"
        color="primary"
        variant="solid"
        to="tel:+19492354536"
      />
      <UButton
        label="Submit Another Request"
        color="neutral"
        variant="ghost"
        @click="resetForm"
      />
    </div>
  </div>

  <UForm
    v-else
    :schema="consultationSchema"
    :state="state"
    class="space-y-4"
    @submit="onSubmit"
  >
    <UAlert
      v-if="errorMessage"
      color="error"
      variant="subtle"
      icon="i-lucide-alert-circle"
      :description="errorMessage"
    />

    <!-- Honeypot field hidden from real visitors -->
    <div class="hidden" aria-hidden="true">
      <label for="website-hp">Website</label>
      <input id="website-hp" v-model="state.website" type="text" tabindex="-1" autocomplete="off" />
    </div>

    <div class="grid gap-4 sm:grid-cols-2">
      <UFormField label="First Name" name="firstName" required>
        <UInput
          v-model="state.firstName"
          placeholder="First name"
          autocomplete="given-name"
          size="lg"
          class="w-full"
        />
      </UFormField>

      <UFormField label="Last Name" name="lastName" required>
        <UInput
          v-model="state.lastName"
          placeholder="Last name"
          autocomplete="family-name"
          size="lg"
          class="w-full"
        />
      </UFormField>
    </div>

    <div class="grid gap-4 sm:grid-cols-2">
      <UFormField label="Phone" name="phone" required>
        <UInput
          v-model="state.phone"
          type="tel"
          placeholder="(949) 555-0123"
          autocomplete="tel"
          size="lg"
          class="w-full"
        />
      </UFormField>

      <UFormField label="ZIP Code for Installation" name="zipCode" required>
        <UInput
          v-model="state.zipCode"
          placeholder="92614"
          autocomplete="postal-code"
          inputmode="numeric"
          size="lg"
          class="w-full"
        />
      </UFormField>
    </div>

    <UFormField label="Email" name="email" required>
      <UInput
        v-model="state.email"
        type="email"
        placeholder="you@example.com"
        autocomplete="email"
        size="lg"
        class="w-full"
      />
    </UFormField>

    <div class="grid gap-4 sm:grid-cols-2">
      <UFormField label="How would you like to be connected?" name="contactMethod" required>
        <USelect
          v-model="state.contactMethod"
          :items="contactMethodItems"
          size="lg"
          class="w-full"
        />
      </UFormField>

      <UFormField label="Stiltz model you're interested in" name="productInterest" required>
        <USelect
          v-model="state.productInterest"
          :items="productInterestItems"
          size="lg"
          class="w-full"
        />
      </UFormField>
    </div>

    <UFormField label="Questions or project details (optional)" name="comments">
      <UTextarea
        v-model="state.comments"
        :rows="compact ? 3 : 4"
        placeholder="Tell us about your home (existing home retrofit, remodel, new build, showroom visit, etc.)"
        class="w-full"
      />
    </UFormField>

    <div class="space-y-2.5 pt-1">
      <UCheckbox
        v-model="state.veteranSpecial"
        label="Tell me about the Veteran Special"
        name="veteranSpecial"
      />
      <UCheckbox
        v-model="state.smsOptIn"
        label="Okay to text me updates regarding my consultation"
        description="Optional. Message & data rates may apply. Reply STOP anytime to opt out."
        name="smsOptIn"
      />
    </div>

    <UButton
      type="submit"
      :label="submitLabel"
      :loading="loading"
      color="primary"
      variant="solid"
      size="xl"
      trailing-icon="i-lucide-arrow-right"
      block
    />
  </UForm>
</template>
