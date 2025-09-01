import { create } from "zustand";

const useHomeStore = create((set) => ({
  formData: {
    title: "",
    language: "",
    writingStyle: "",
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
        title: "",
        language: "",
        writingStyle: "",
      },
    }),

  setContent: (content) => set({ content }),
  setLoading: (loading) => set({ loading }),
}));

export default useHomeStore;
