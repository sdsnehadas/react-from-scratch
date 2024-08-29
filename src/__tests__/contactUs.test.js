import { render, screen } from '@testing-library/react';
import  ContactUs from '../components/ContactUs';
import "@testing-library/jest-dom";

describe("should test contact us page rendering",()=>{
    test("should load ContactUs component", ()=>{
        render(<ContactUs/>);
     const userComponent = screen.getByText("John Doe - CEO");
     expect(userComponent).toBeInTheDocument();
    })
})
