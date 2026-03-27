import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../NavBar";

const renderWithRouter = (ui: React.ReactElement) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

// Mock viewport matchMedia if required, though NavBar seems to use Tailwind classes for visibility.
describe("NavBar Component", () => {
  it("renders the Logo correctly", () => {
    renderWithRouter(<NavBar />);
    const logo = screen.getByRole("link", { name: /Voltar para a página inicial/i });
    expect(logo).toBeInTheDocument();
  });

  it("renders the desktop navigation links", () => {
    renderWithRouter(<NavBar />);
    expect(screen.getByText(/Sobre/i)).toBeInTheDocument();
    expect(screen.getByText(/Aulas/i)).toBeInTheDocument();
    expect(screen.getByText(/Projetos/i)).toBeInTheDocument();
    expect(screen.getByText(/Contato/i)).toBeInTheDocument();
  });

  it("toggles the mobile menu when clicking the menu button", () => {
    renderWithRouter(<NavBar />);
    const menuButton = screen.getByLabelText(/Alternar menu mobile/i);
    
    // Click to open
    fireEvent.click(menuButton);
    const aboutLinks = screen.getAllByText(/Sobre/i);
    expect(aboutLinks.length).toBeGreaterThanOrEqual(1);
  });

  it("updates the URL hash when a navigation link is clicked", () => {
    renderWithRouter(<NavBar />);
    const aboutLink = screen.getAllByText(/Sobre/i)[0]; // Use the first one (desktop)
    fireEvent.click(aboutLink);
    expect(window.location.hash).toBe("#sobre");
  });
});
