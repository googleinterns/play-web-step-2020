import React from 'react';
import { FetchMock } from '@react-mock/fetch';
import { render, wait } from '@testing-library/react';
import App from './App';

const responseData = {"clusters":[{"title":"Top Charts","subtitle":"For Wear OS","charts":[{"title":"Top Free","apps":[{"id":"1","icon":"mockIcon1.png","title":"mockApp1","category":"Fake Apps","rating":5.0,"price":0.0},{"id":"2","icon":"mockIcon2.png","title":"mockApp2","category":"Fake Apps","rating":5.0,"price":0.0}]},{"title":"Top Grossing","apps":[{"id":"3","icon":"mockIcon3.png","title":"mockApp3","category":"Fake Apps","rating":5.0,"price":0.0},{"id":"4","icon":"mockIcon4.png","title":"mockApp4","category":"Fake Apps","rating":5.0,"price":0.0}]},{"title":"Top Paid","apps":[{"id":"5","icon":"mockIcon5.png","title":"mockApp5","category":"Fake Apps","rating":5.0,"price":0.0},{"id":"6","icon":"mockIcon6.png","title":"mockApp6","category":"Fake Apps","rating":5.0,"price":0.0}]}],"type":"TopCharts"},{"cards":[{"title":"mockCard1","bigImageUrl":"https://mockBigImageUrl.com","apps":{"id":"1","icon":"mokcIcon1.png","title":"mockApp1","category":"Fake Apps","rated":"Everyone","appDescription":"mock app description","rating":5.0,"price":0.0}},{"title":"mockCard2","bigImageUrl":"https://mockBigImageUrl.com","apps":{"id":"2","icon":"mokcIcon2.png","title":"mockApp2","category":"Fake Apps","rated":"Everyone","appDescription":"mock app description","rating":5.0,"price":0.0}},{"title":"mockCard3","bigImageUrl":"https://mockBigImageUrl.com","apps":{"id":"3","icon":"mokcIcon3.png","title":"mockApp3","category":"Fake Apps","rated":"Everyone","appDescription":"mock app description","rating":5.0,"price":0.0}},{"title":"mockCard4","bigImageUrl":"https://mockBigImageUrl.com","apps":{"id":"4","icon":"mokcIcon4.png","title":"mockApp4","category":"Fake Apps","rated":"Everyone","appDescription":"mock app description","rating":5.0,"price":0.0}}]}]}

const renderComponent = () => 
  render(
      <FetchMock
        options={{
          matcher: '/api/v1/stream', method: 'GET', response: responseData
        }}
      >
      <App />
      </FetchMock>
  );

test('fetch returns data for Top Charts cluster', async () => {
    const { getByText } = renderComponent();
    await wait(() => expect(getByText('Top Charts')).toBeInTheDocument());
});

test('loads and displays greeting from Recommended Categories', async () => {
    const { getByText } = renderComponent();
    await wait(() => expect(getByText('Browse recommended categories')).toBeInTheDocument());
});

test('loads and displays greeting from App of the week', async () => {
    const { getByText } = renderComponent();
    await wait(() => expect(getByText('App of the week')).toBeInTheDocument());
});

test('nothing is rendered when fetch fails', async () => {
    const { container } = render(<App />);
    await wait(() => expect(container.firstChild).not.toBeInTheDocument());        
});
