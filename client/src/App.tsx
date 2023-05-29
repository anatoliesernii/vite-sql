import users from '@/utils/seeders/users';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import './css/App.scss';
import CustomerCreate from './pages/Customers/CustomerCreate';
import CustomerEdit from './pages/Customers/CustomerEdit';
import Customers from './pages/Customers/Customers';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Sales from './pages/Sales';
import Settings from './pages/Settings/Settings';

function App(): JSX.Element {
	const user = users[1];

	type ProtectedRouteProps = {
		isAllowed: boolean;
		redirectPath?: string;
		children?: JSX.Element;
	};
	const ProtectedRoute = ({ isAllowed, redirectPath = '/login', children }: ProtectedRouteProps) => {
		if (!isAllowed) {
			return <Navigate to={redirectPath} replace />;
		}

		return children ? children : <Outlet />;
	};

	return (
		<>
			<Routes>
				<Route path="/login" element={!user ? <Login /> : <Navigate to={'/'} />} />

				<Route element={<ProtectedRoute isAllowed={!!user} />}>
					<Route path="/" element={<Home />} />
				</Route>

				<Route element={<ProtectedRoute isAllowed={!!user && user.permissions?.includes('view')} redirectPath="/" />}>
					<Route path="/customers" element={<Customers />} />
					<Route path="/customers/create" element={<CustomerCreate />} />
					<Route path="/customers/:uid/edit" element={<CustomerEdit />} />
				</Route>

				<Route element={<ProtectedRoute redirectPath="/" isAllowed={!!user && user.roles == 'admin'} />}>
					<Route path="/sales" element={<Sales />} />
				</Route>

				<Route element={<ProtectedRoute redirectPath="/" isAllowed={!!user && user.roles?.includes('dev')} />}>
					<Route path="/settings" element={<Settings />} />
				</Route>

				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
}

export default App;
