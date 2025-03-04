import React, { useEffect, useState } from 'react';
import { Tabs, Tab, Card, ListGroup, Button } from 'react-bootstrap';
import axios from 'axios';

const Profile = ({ user }) => {
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const setLoading = useState(true)[1]; // Fix: Only use setLoading to avoid unused variable warning

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch cart items
        const cartRes = await axios.get('http://localhost:5000/api/cart', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setCart(cartRes.data);

        // Fetch orders
        const ordersRes = await axios.get('http://localhost:5000/api/orders', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setOrders(ordersRes.data);

      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (user) fetchData();
  }, [user, setLoading]); // ✅ Added setLoading to dependency array

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Welcome, {user?.name}</h2>
      
      <Tabs defaultActiveKey="profile" id="profile-tabs">
        {/* Profile Tab */}
        <Tab eventKey="profile" title="Profile">
          <Card className="mt-3">
            <Card.Body>
              <Card.Title>Personal Information</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>Email: {user?.email}</ListGroup.Item>
                <ListGroup.Item>Joined: {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : "N/A"}</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Tab>

        {/* Cart Tab */}
        <Tab eventKey="cart" title={`Cart (${cart.length})`}>
          <div className="mt-3">
            {cart.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              cart.map(item => (
                <Card key={item._id} className="mb-3">
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                      Quantity: {item.quantity}<br/>
                      Price: ₹{item.price}
                    </Card.Text>
                    <Button variant="danger" size="sm">Remove</Button>
                  </Card.Body>
                </Card>
              ))
            )}
          </div>
        </Tab>

        {/* Orders Tab */}
        <Tab eventKey="orders" title={`Orders (${orders.length})`}>
          <div className="mt-3">
            {orders.length === 0 ? (
              <p>No orders found</p>
            ) : (
              orders.map(order => (
                <Card key={order._id} className="mb-3">
                  <Card.Body>
                    <Card.Title>Order #{order.orderId}</Card.Title>
                    <Card.Text>
                      Date: {new Date(order.date).toLocaleString()}<br/>
                      Total: ₹{order.total}<br/>
                      Status: <span className="text-success">{order.status}</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))
            )}
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Profile;
