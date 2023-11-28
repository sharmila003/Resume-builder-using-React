import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Education from "./Education";

// Create a mock store
const mockStore = configureMockStore();

describe("Education Component", () => {
  it("renders Education component correctly", () => {
    const initialState = {
      educationDetailsReducer: {
        educationInfo: {
          domain: "",
          university: "",
          degree: "",
          startYear: "",
          endYear: "",
        },
      },
    };
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <Education />
      </Provider>
    );

    // Check if the component renders as expected
    expect(screen.getByText("Education Details")).toBeInTheDocument();
    expect(screen.getByText("Domain")).toBeInTheDocument();
  });

  it("handles Next button click", async () => {
    const initialState = {
      educationDetailsReducer: {
        educationInfo: {
          domain: "",
          university: "",
          degree: "",
          startYear: "",
          endYear: "",
        },
      },
    };
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <Education />
      </Provider>
    );

    // Mock the API call (use waitFor if there are asynchronous operations)
    const addEducationMock = jest.fn(() => Promise.resolve());
    jest.mock("../redux/actions/Action", () => ({
      ...jest.requireActual("../redux/actions/Action"),
      addEducation: addEducationMock,
    }));

    // Click the Next button
    fireEvent.click(screen.getByText("Next"));

    // Wait for the asynchronous operations to complete
    await waitFor(() => {
      // Check if the addEducation function was called
      expect(addEducationMock).toHaveBeenCalled();
    });
  });
});
