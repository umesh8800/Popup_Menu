import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import FacebookIcon from '@material-ui/icons/Facebook';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import project1 from './images/project1.png';
import project from './images/project.png';
import './Header.css';

// import firebase from "firebase"
import db from "./Firebase"


const useStyles = makeStyles((theme) => ({
    typography: {
        padding: theme.spacing(2),
    },
}));

function Header() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [number, setNumber] = useState()

    const submit = (e) => {
        e.preventDefault()
        const Data = {
            name: name,
            email: email,
            number: number
        }

        db.collection("data").add({
            Name: name,
            Email:email,
            Option: number
        })
        console.log(Data)
    }
    if (number === "2") {
        console.log('correct answer')
    }
    else {
        console.log("incorrect answer")
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return (
        <>
            <div>

                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorReference="anchorPosition"
                    anchorPosition={{ top: 50, left: 700 }}
                    anchorOrigin={{
                        vertical: 'center',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
                    <Typography className={classes.typography} style={{ textAlign: 'center' }}>

                        answer

        </Typography>
                    <Typography>
                        <Card style={{ width: '300px', textAlign: 'center', height: '250px' }} >
                            <TextField
                                id="standard-password-input"
                                label="Name"
                                type="Text"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                autoComplete="current-password"
                            /><br /><br />
                            <TextField
                                id="standard-password-input"
                                label="email"
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                autoComplete="current-password"
                            /><br /><br />
                            <label for="cars">Options:</label>
                            <select id="cars" value={number} onChange={e => setNumber(e.target.value)}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select><br /><br />
                            <Button variant="contained" color="primary" onClick={submit}>
                                submit
                            </Button>
                        </Card>
                    </Typography>


                </Popover>
            </div>
            <header style={{ border: '2px solid black' }}>
                <h1 style={{ textAlign: "center", color: 'white',backgroundColor:"black" }}> Challenge Question of the day</h1>
            </header>
            <div className=' text' style={{marginRight:'30px'}}>
                <p > <b>Q.1</b> In a school cafeteria, 4 people can sit togethet at one table. If 2 tables are 
             placed together, 6 people can sit together. How many table would we 
            need for 60 people to sit together. </p>
                <div className='main'>
                    <img src={project1}></img>
                    <div className="six_seat">
                        <img src={project}></img>
                        
                    </div>
                </div>

                <div className="Buttons">
                    <button className='btn' onClick={handleClick}> A</button><h1> 30</h1>
                    <button className='btn' onClick={handleClick}>  B</button><h1> 29</h1>
                    <button className='btn' onClick={handleClick}>  C</button><h1> 28</h1>
                    <button className='btn' onClick={handleClick}> D</button><h1> 27</h1>

                </div>

                <div className="image" style={{ paddingTop: "4%" }}>
                    <h1> Contributed by</h1><br />
                    <div style={{ display: "flex" }}>
                        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" alt="Nature" class="responsive" /> <h4 style={{ paddingTop: 24, marginLeft: 25 }} >Umesh Shakya</h4>
                    </div>
                </div>
                <br /> <br />
                <br />

                <div className="last_btn">
                    <div className="like-1" >
                    <Button variant="contained" color='primary' style={{marginLeft:'10px'}}> <a href="http://facebook.com/pages/?category=liked&ref=bookmarks" style={{textDecoration:'none', color:'white', textAlign:"center"}}>
                    <ThumbUpAltIcon /> Like </a> </Button>
                    </div>
                    <div className="like-2" >
                    <Button variant="contained" color="primary" style={{marginLeft:'10px'}}> <a href="https://www.facebook.com/share" style={{textDecoration:'none', color:'white', textAlign:"center"}} >
                        <FacebookIcon /> Share
                        </a></Button>
                    </div>
                    <div className="like-3" >
                    <Button variant="contained" color="primary" style={{marginLeft:'10px'}}>
                        <a href="https://www.facebook.com/pages/?category=following&ref=bookmarks" style={{textDecoration:'none', color:'white', textAlign:"center"}} >
                        <FacebookIcon /> Follow
                    </a></Button>
                    </div>
                    

                </div>

            </div>


        </>
    )
}

export default Header
