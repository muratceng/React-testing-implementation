import  { render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import App from '../App';
import EmojiResults from '../EmojiResults'


test('should renders header ', () => {
    render(<App/>);
    const header = screen.getByText(/Emoji Search/i);
    expect(header).toBeInTheDocument();
})

test('should renders emoji lists', () => {
    const result = render(<App/>);
    const emojiList = result.container.querySelector('.component-emoji-results');
    expect(emojiList).toBeInTheDocument();
})

test('should render a filtered list', () => {
    render(<App/>)
    const input = screen.getByTitle("emojiInput");
    let emojis = screen.getAllByText("Click to copy emoji");
    userEvent.type(input,"heart eyes");
    
    const heartEyes = screen.getByText("Heart Eyes Cat");
    expect(heartEyes).toBeInTheDocument();
    

})

test('should copy when the click emoji', () => {
    render(<App/>);
    const hundred = screen.getByText("100");
    const clicked= userEvent.click(hundred);
    console.log(clicked);

})
