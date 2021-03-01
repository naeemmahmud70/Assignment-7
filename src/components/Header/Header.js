import React from 'react';

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-dark bg-dark text-light">
                <div class="container-fluid">
                    <h2>Make your team for IPL</h2>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Find player by name" aria-label="Search" />
                        <button class="btn btn-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>

        </div>
    );
};

export default Header;