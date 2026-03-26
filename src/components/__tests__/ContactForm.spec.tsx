import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ContactForm from "../ContactForm";
import * as sonner from "sonner"; // Mocking sonner for toast verification

vi.mock("sonner", () => ({
  toast: {
    error: vi.fn(),
    warning: vi.fn(),
    success: vi.fn(),
  },
}));

vi.mock("@/config/site", () => ({
  WEBHOOK_URL: "https://mock-webhook.url",
}));

describe("ContactForm Component", () => {
  it("renders the form fields correctly", () => {
    render(<ContactForm />);
    expect(screen.getByPlaceholderText(/Seu nome/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Seu e-mail/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Agendar minha primeira aula/i })).toBeInTheDocument();
  });

  it("shows an error when trying to submit empty fields", async () => {
    render(<ContactForm />);
    fireEvent.click(screen.getByRole("button", { name: /Agendar minha primeira aula/i }));
    
    await waitFor(() => {
      expect(sonner.toast.error).toHaveBeenCalledWith("Preencha seu nome e e-mail.");
    });
  });

  it("can type into fields", () => {
    render(<ContactForm />);
    const nameInput = screen.getByPlaceholderText(/Seu nome/i);
    const emailInput = screen.getByPlaceholderText(/Seu e-mail/i);

    fireEvent.change(nameInput, { target: { value: "João Silva" } });
    fireEvent.change(emailInput, { target: { value: "joao@example.com" } });

    expect(nameInput).toHaveValue("João Silva");
    expect(emailInput).toHaveValue("joao@example.com");
  });
});
