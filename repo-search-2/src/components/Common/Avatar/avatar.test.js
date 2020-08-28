import {Avatar} from "./index";
import React from "react";
import { render,screen } from '@testing-library/react';

describe("Avatar component tests", () => {
    test("Avatar should have right elements", () => {
        render(<Avatar source={"./dummy.png"} alt={"dummy"} title={"dummy image title"}/>)
        const img = screen.getByRole("img")
        expect(img.getAttribute("title")).toEqual("dummy image title")
    })

})




