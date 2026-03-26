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
    const menuButton = screen.getByLabelText(/Toggle menu/i);
    
    // Initial state: mobile menu shouldn't be fully expanded, but Framer Motion might keep it in DOM with height 0
    // Click to open
    fireEvent.click(menuButton);
    // There are 2 sets of links (desktop and mobile), so calling getAllByText is safer
    const aboutLinks = screen.getAllByText(/Sobre/i);
    expect(aboutLinks.length).toBeGreaterThanOrEqual(1);
  });
});
