import './App.css';
import css from '../src/image/css-icon 1.png';
import html from '../src/image/html-icon 1.png';
import url from '../src/image/url-icon 1.png';
function App() {
    return (
        <div className="App">
            <div className="navbar">
                <a href="/#">Home</a>
                <a href="/#">Services</a>
                <a href="/#">News</a>
                <a href="/#">Blog</a>
                <a href="/#">Contact</a>
            </div>
            <div className="content">
                <div className="logo"></div>
                <div className="rectangle">
                    <h1>Lorem ipsum dolor sit asmet?</h1>
                    <div className="rectangle-content">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat.
                            Vestibulum auctor pellentesque sem, eu
                        </p>
                        <p>
                            posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis
                            sodales, augue justo tristique nulla, sed lacinia
                        </p>
                        <p>
                            ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent
                            et nisi eu justo eleifend convallis. Quisque
                        </p>
                        <p>
                            suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique
                            eu. Donec vulputate odio neque, sed semper
                        </p>
                        <p>turpis pellentesque a.</p>
                    </div>
                </div>
                <div className="second-content">
                    <div className="css-content">
                        <h1>Lorem ipsum dolor sit amet</h1>
                        <div className="flex-content">
                            <img className="img" src={css} alt="" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus
                                libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat
                                condimentum velit ut tempor. Nam porta massa in metus bibendum congue.
                            </p>
                        </div>
                        <p>
                            Pellentesque ultrices liquam egestas nunc atullamcorper ultricies. Donec feugiat velit
                            nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam
                            porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.
                        </p>
                    </div>
                    <div className="css-content">
                        <h1>Lorem ipsum dolor sit amet</h1>
                        <div className="flex-content">
                            <img className="img" src={html} alt="" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus
                                libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat
                                condimentum velit ut tempor. Nam porta massa in metus bibendum congue.
                            </p>
                        </div>
                        <p>
                            Pellentesque ultrices liquam egestas nunc atullamcorper ultricies. Donec feugiat velit
                            nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam
                            porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.
                        </p>
                    </div>
                    <div className="css-content">
                        <h1>Lorem ipsum dolor sit amet</h1>
                        <div className="flex-content">
                            <img className="img" src={url} alt="" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus
                                libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat
                                condimentum velit ut tempor. Nam porta massa in metus bibendum congue.
                            </p>
                        </div>
                        <p>
                            Pellentesque ultrices liquam egestas nunc atullamcorper ultricies. Donec feugiat velit
                            nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam
                            porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.
                        </p>
                    </div>
                </div>
                <div className="footer">
                    <p>Copyright &copy; 2021</p>
                </div>
            </div>
        </div>
    );
}

export default App;
