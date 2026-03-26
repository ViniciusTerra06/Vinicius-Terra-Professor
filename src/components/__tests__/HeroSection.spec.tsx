import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import HeroSection from "../sections/HeroSection";

// Mock matchMedia for framer-motion if needed
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

describe("HeroSection Component", () => {
  it("renders the main headings and call to actions", () => {
    render(<HeroSection />);
    
    // As we have dynamic typewriter text, asserting the static parts:
    expect(screen.getByText(/Ensino você a transformar processos manuais/)).toBeInTheDocument();
    
    // The profile image with correct alt text
    const img = screen.getByRole("img", { name: /Vinicius Terra/i });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("loading", "eager");

    // The links / CTAs
    const linkAulas = screen.getByRole("link", { name: /Aulas e Consultorias/i });
    expect(linkAulas).toHaveAttribute("href", "#como-funciona");
    
    const linkConhecer = screen.getByRole("link", { name: /Conhecer mais/i });
    expect(linkConhecer).toHaveAttribute("href", "#sobre");
  });
});
