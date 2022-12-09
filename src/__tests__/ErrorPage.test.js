import renderer from 'react-test-renderer';
import ErrorPage from '../components/ErrorPage';

it('<ErrorPage /> renders correctly', () => {
  const tree = renderer
    .create(<ErrorPage />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
