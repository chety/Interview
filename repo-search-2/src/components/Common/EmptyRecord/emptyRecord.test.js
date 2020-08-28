import {EmptyRecord} from "./index";
import React from "react";
import { render,screen } from '@testing-library/react';

describe("EmptyRecord component tests", () => {
    it("EmptyRecord should have right elements with default props", () => {
        render(<EmptyRecord />)
        const element =screen.getByText(/no data/i)
        expect(element).toBeTruthy()

    })
    it("Should have right message when message prop provided", () => {
        render(<EmptyRecord message={"Please Wait..."} />)
        expect(screen.getByText(/please/i)).toBeTruthy()
    })

})