import {RepoSearch} from "./index";
import React from "react";
import {render, screen} from '@testing-library/react';
import userEvent from "@testing-library/user-event";

describe("RepoSearch component tests", () => {

    test("RepoSearch should loading when search for repo", async () => {
        render(<RepoSearch/>)

        const repoSearchTextBox = screen.getByRole("textbox")
        const repoSearchButton = screen.getByRole("button")

        userEvent.type(repoSearchTextBox, "javascript");
        userEvent.click(repoSearchButton);
        expect(screen.getByText(/loading/i)).toBeTruthy()
        const numberOfRepos = await screen.findByText(/total count:/i)
        screen.debug(numberOfRepos)

    })

})