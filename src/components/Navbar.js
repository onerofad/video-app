import { Button, Container, Dropdown, Menu } from "semantic-ui-react"

const Navbar = () => {
    return(
        <div>
            <Menu fixed="top" inverted pointing>
                <Container>
                    <Menu.Item as="a" header>
                        Video App
                    </Menu.Item>
                    <Menu.Item as='a'>
                        Movies
                    </Menu.Item>
                    <Menu.Item as='a'>
                        TV Shows
                    </Menu.Item>
                    <Dropdown item simple text="Browse">
                        <Dropdown.Menu>
                            <Dropdown.Item>   
                                Genres
                            </Dropdown.Item>
                            <Dropdown.Item>
                                All Categories
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Menu.Item position="right">
                        <Button color="orange">
                            Register
                        </Button>
                    </Menu.Item>
                    <Menu.Item as='a'>
                        Log in
                    </Menu.Item>

                </Container>
            </Menu>
        </div>
    )
}
export default Navbar