import { render, screen, fireEvent } from "@testing-library/react"
import { useMediaQuery } from "@/hooks/use-media-query"
import DashboardLayout from "@/app/dashboard/layout"

// Mock the hooks and components
jest.mock("@/hooks/use-media-query")
jest.mock("@/lib/auth", () => ({
  useAuth: () => ({
    user: { id: "1", name: "Test User", email: "test@example.com" },
  }),
}))

describe("DashboardLayout", () => {
  beforeEach(() => {
    // Reset all mocks before each test
    jest.clearAllMocks()
  })

  it("renders the dashboard layout correctly", () => {
    ;(useMediaQuery as jest.Mock).mockReturnValue(false)

    render(
      <DashboardLayout>
        <div>Test Content</div>
      </DashboardLayout>
    )

    expect(screen.getByTestId("dashboard-layout")).toBeInTheDocument()
    expect(screen.getByTestId("dashboard-content")).toBeInTheDocument()
    expect(screen.getByText("Test Content")).toBeInTheDocument()
  })

  it("collapses sidebar on mobile", () => {
    ;(useMediaQuery as jest.Mock).mockReturnValue(true)

    render(
      <DashboardLayout>
        <div>Test Content</div>
      </DashboardLayout>
    )

    const toggleButton = screen.getByTestId("sidebar-toggle")
    expect(toggleButton).toBeInTheDocument()

    // Sidebar should be initially closed on mobile
    expect(screen.queryByTestId("sidebar")).not.toBeInTheDocument()

    // Click to open sidebar
    fireEvent.click(toggleButton)
    expect(screen.getByTestId("sidebar")).toBeInTheDocument()
  })

  it("maintains sidebar state on desktop", () => {
    ;(useMediaQuery as jest.Mock).mockReturnValue(false)

    render(
      <DashboardLayout>
        <div>Test Content</div>
      </DashboardLayout>
    )

    // Sidebar should be visible by default on desktop
    expect(screen.getByTestId("sidebar")).toBeInTheDocument()
  })
})