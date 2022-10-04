import Carousel from 'react-bootstrap/Carousel';


function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i0.wp.com/blog.lulu.com/wp-content/uploads/2020/07/072120-ToDoList-Blog.png"
          alt="First slide" height="600px"
        />
        <Carousel.Caption>
          <h3>Todo List</h3>
          <p>#1 Todo listing app, developed in React</p>
        </Carousel.Caption>
      </Carousel.Item>
      

    </Carousel>
  );
}

export default Slider;