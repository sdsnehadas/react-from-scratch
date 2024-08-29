import {render, screen, act, jestdom} from '@testing-library/react';
import Restaurentmenu from '../components/Restaurentmenu';
import MOCK_DATA from './mocks/resList.json';

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    }
    )
}) 
// it("should render the restaurent menu page ", async ()=>{
//     await act(async () => {
//         render(<Restaurentmenu/>);
//       });

//       const accordionHeader= screen.getByDisplayValue("Recommended (16)")
//       expect (accordionHeader).toBeInTheDocument();
// })