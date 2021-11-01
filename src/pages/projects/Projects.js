import React from 'react'
// import Card from "react-bootstrap/Card";
// import CardColumns from 'react-bootstrap/CardColumns';
import Button from 'react-bootstrap/Button';

import Project1Carousel from '../../components/Project1Carousel';
import Project2Carousel from '../../components/Project2Carousel';
import Project3Carousel from '../../components/Project3Carousel';
import styled from "styled-components";

import './projects.style.css'

const MyTitle = styled.div`
    font-size: 2.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #66fcf1;
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 300;
    letter-spacing: 5px;
    padding-bottom: 2em;
`;

export default function Projects() {

    return (
        <div id='projects' className="projects">
            
            <div className="pt-5 projects">
                <MyTitle>
                    Projects
                </MyTitle>
                <Project3Carousel/>
                <div style={{ margin: 'auto', width: '80%', padding: '2em 0 1em 0'}}>
                    A music visualizer website made with React and the <a href="https://developer.spotify.com/documentation/web-api/"> Spotify API </a>
                    . Features user authenticaiton via spotify premium account, displays user playlists, built in music player, dynamic background color and particles,
                    responsive web design.
                </div>
                <div className="pb-5 projectbuttons">
                    <div className="btn">
                        <a href="https://github.com/anthonychian/spotifyapp" target="_blank" rel="noopener noreferrer">
                            <Button className="m-2" variant="outline-primary">Github</Button>
                        </a>
                    </div>
                    <div className="btn">
                        <a href="https://spotify-api-react-app.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <Button className="m-2" variant="outline-primary">Website</Button>
                        </a>
                    </div>
                </div>
                <Project1Carousel/>
                <div style={{ margin: 'auto', width: '80%', padding: '2em 0 1em 0'}}>
                    A database website for Genshin Impact. Made using React and the <a href="https://genshin.dev/"> genshin.dev </a> api.
                    Features character selection page, character detail page, game data (attributes, skills, and items). Realtime updates that reflect in game content via genshin.dev. 
                    
                </div>
                <div className="pb-5 projectbuttons">
                    <div className="btn">
                        <a href="https://github.com/anthonychian/genshin" target="_blank" rel="noopener noreferrer">
                            <Button className="m-2" variant="outline-primary">Github</Button>
                        </a>
                    </div>
                    <div className="btn">
                        <a href="https://genshin-website.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <Button className="m-2" variant="outline-primary">Website</Button>
                        </a>
                    </div>
                </div>
                <Project2Carousel/>
                {/* <h2 className="pt-5 text-center projects-font pb-4">Blog Website</h2> */}
                <div style={{ margin: 'auto', width: '80%', padding: '2em 0 1em 0'}}>
                    A full stack blog website. Allows users to create, edit, delete, like and display their blog posts. Features home page, my blogs page, creation page, editing page, user authenticaiton.
                </div>
                <div className="pb-5 projectbuttons">
                    <div className="btn">
                        <a href="https://github.com/anthonychian/blog" target="_blank" rel="noopener noreferrer">
                            <Button className="m-2" variant="outline-primary">Github</Button>
                        </a>
                    </div>
                </div>
                
            </div>
        </div>
    )
}