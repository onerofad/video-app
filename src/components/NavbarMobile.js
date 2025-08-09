import { Button, Dropdown, Menu } from "semantic-ui-react"

const NavbarMobile = () => {

    return(
        <div>
           <Menu fixed="top" inverted>
            <Menu.Item as='a' header>
                Video App
            </Menu.Item>

            <Dropdown simple item text="Watch Movies">
                <Dropdown.Menu>
                    <Dropdown.Item>
                        Movies
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Tv Shows
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Menu.Item as='a'>
                Sign in
            </Menu.Item>
           </Menu>
        </div>
    
    )
}
export default NavbarMobile