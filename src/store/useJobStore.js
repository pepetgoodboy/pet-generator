import { create } from "zustand";

const useJobStore = create((set) => ({
  formData: {
    position: "",
    company: "",
    location: "",
    writingStyle: "",
    language: "",
    promptType: "",
  },
  content: "",
  loading: false,

  setFormData: (updates) =>
    set((state) => ({
      formData: { ...state.formData, ...updates },
    })),

  resetForm: () =>
    set({
      formData: {
        position: "",
        company: "",
        location: "",
        writingStyle: "",
        language: "",
        promptType: "",
      },
    }),

  setContent: (content) => set({ content }),
  setLoading: (loading) => set({ loading }),
}));

export default useJobStore;
