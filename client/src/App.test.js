import React from 'react';
import { FetchMock } from '@react-mock/fetch';
import { render, wait } from '@testing-library/react';
import App from './App';

const responseData = {
	"clusters": [{
		"title": "Rock out while you work out",
		"cards": [{
			"id": "mockCard1",
			"bigImageUrl": "/images/emptyAppIcon.jpeg",
			"app": {
				"id": "1",
				"url": "/images/emptyAppIcon.jpeg",
				"title": "mockApp1",
				"category": "Fake Apps",
				"rated": "Everyone",
				"appDescription": "mock app description",
				"rating": 5.0,
				"price": 0.0
			}
		}, {
			"id": "mockCard2",
			"bigImageUrl": "/images/emptyAppIcon.jpeg",
			"app": {
				"id": "2",
				"url": "/images/emptyAppIcon.jpeg",
				"title": "mockApp2",
				"category": "Fake Apps",
				"rated": "Everyone",
				"appDescription": "mock app description",
				"rating": 5.0,
				"price": 0.0
			}
		}, {
			"id": "mockCard3",
			"bigImageUrl": "/images/emptyAppIcon.jpeg",
			"app": {
				"id": "3",
				"url": "/images/emptyAppIcon.jpeg",
				"title": "mockApp3",
				"category": "Fake Apps",
				"rated": "Everyone",
				"appDescription": "mock app description",
				"rating": 5.0,
				"price": 0.99
			}
		}, {
			"id": "mockCard4",
			"bigImageUrl": "/images/emptyAppIcon.jpeg",
			"app": {
				"id": "4",
				"url": "/images/emptyAppIcon.jpeg",
				"title": "mockApp4",
				"category": "Fake Apps",
				"rated": "Everyone",
				"appDescription": "mock app description",
				"rating": 5.0,
				"price": 0.0
			}
		}],
		"type": "StandardCluster",
		"id": "standardClusterID"
	}, {
		"title": "Top Charts",
		"subtitle": "For Wear OS",
		"charts": [{
			"title": "Top Free",
			"chartId": "1",
			"apps": [{
				"id": "1",
				"url": "/images/emptyAppIcon.jpeg",
				"title": "mockApp1",
				"category": "Fake Apps",
				"rating": 5.0,
				"price": 0.0
			}, {
				"id": "2",
				"url": "/images/emptyAppIcon.jpeg",
				"title": "mockApp2",
				"category": "Fake Apps",
				"rating": 5.0,
				"price": 0.0
			}]
		}, {
			"title": "Top Grossing",
			"chartId": "2",
			"apps": [{
				"id": "3",
				"url": "/images/emptyAppIcon.jpeg",
				"title": "mockApp3",
				"category": "Fake Apps",
				"rating": 5.0,
				"price": 0.0
			}, {
				"id": "4",
				"url": "/images/emptyAppIcon.jpeg",
				"title": "mockApp4",
				"category": "Fake Apps",
				"rating": 5.0,
				"price": 0.0
			}]
		}, {
			"title": "Top Paid",
			"chartId": "3",
			"apps": [{
				"id": "5",
				"url": "/images/emptyAppIcon.jpeg",
				"title": "mockApp5",
				"category": "Fake Apps",
				"rating": 5.0,
				"price": 0.0
			}, {
				"id": "6",
				"url": "/images/emptyAppIcon.jpeg",
				"title": "mockApp6",
				"category": "Fake Apps",
				"rating": 5.0,
				"price": 0.0
			}]
		}],
		"type": "TopCharts",
		"id": "topChartsID"
	}]
}

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

test('loads and displays text from App of the week', async () => {
    const { getByText } = renderComponent();
    await wait(() => expect(getByText('App of the week')).toBeInTheDocument());
});

test('fetch returns data for Standard Cluster', async () => {
    jest.setTimeout(30000);
    const { getByText } = renderComponent();
    await wait(() => expect(getByText('Rock out while you work out')).toBeInTheDocument());
});

test('nothing is rendered when fetch fails', async () => {
    const { container } = render(<App />);
    await wait(() => expect(container.firstChild).not.toBeInTheDocument());        
});
