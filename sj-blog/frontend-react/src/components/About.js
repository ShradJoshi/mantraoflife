/* eslint-disable */
import React from 'react';
import axios from 'axios';
import config from "../config";

class About extends React.Component {
    constructor(props) {
        super(props);


    }
    componentDidMount() {

    }

    //


    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <img  className="about-img img-thumbnail" src={config.apiEndpoint + 'media/20200130_160249.jpg'} align={'left'} />

                            <p>
                                <i role="presentation">

                                    “Om Mani Padme Hum:  within all of us is the lotus flower, it’s just covered up by a lot of mud and muck."</i><b> - Buddha
                            </b>
                            </p>


                            <p>
                            Welcome to mantra of life. I am by profession a web developer but apart  from that I like writing blog, singing,
                            dancing and reading motivational books which talks about positive thinking. I used to write a lot in my diary
                            growing up about day to day stuff. However,as you grow up and become an adult, you have more responsibilities to
                            fulfill and you put your energy and focus on making more money than following your passion, your dream.
                            Some people are lucky enough to know what they want early in their life, some people take a lifetime to realize
                            their dreams, some people just go after the materialistic things, whatever the case if that makes you happy,
                            hey why not!!</p><p>
                            <p>
                                As I am from a Nepali joint family, I grew up with a lot of cousins. And I am sure many of you know how it
                                feels like growing up with male cousins lol. My cousins loves to watch WWE, Wrestlemania and rock music,
                                Metallica etc. I was a tomboy and used to copy whatever my cousins did lolz. I used to play video games,
                                listen to metallic music watch WWE, football blah blah blah. They were also very technical and used to work
                                with computers often and at that time in Nepal owning a Laptop or computer was so cool. I remember I got my
                                first computer when I graduated from 10th grade. I was really excited at that point and we signed up for a
                                dial-up internet. When I was in high school I literally used to wait for the classes to be over so I can go
                                back home and play some video game. My cousin hooked me up with this game called Breath of Fire, I still
                                remember we used to take turns to play that game. Back then we didn’t have LCD monitors and the CRT monitors
                                would just heat up so fast that we have to shut it down and wait for the monitor to cool off. I still remember
                                the day when we played video games too much  and the fuse went off on the monitor and we panicked like crazy.
                                Also, apart from computer my cousins were also gadget freaks and used to buy gadgets like crazy, I bet they
                                still do that. I was really interested in technology and how it impacted human lives, like how you can search
                                everything and anything in google. I became so much interested in IT that led me to an Undergrad Degree
                                in Information Management and then a Graduate Degree in IT Project Management.
                            </p><p>
                            I came to know about different programming languages in high school and undergrad degree.
                            I knew C++, PHP, JAVA, Javascript and so on. It was a compulsory course in undergrad, I was excited to learn computer
                            language and how we program the computer to perform our task. It was really cool and insane how you can make your own
                            app or a website. IT is a male dominated field worldwide and likewise I was among the 5 girls in our section, funny right.
                            I was a nerd for sure and I dressed like a tomboy and did programming so I thought I was cool.
                            Anyways, my dreams led me to United States and where I completed my Master’s Degree.
                            After I graduated,I started looking for web development jobs online. However, all I heard was rejection and more rejection.
                            I was frustrated and angry as I spent loads of money and time to get those degrees and all I heard was ”You do not have experience”.
                            Frustrated with life, I asked my friend if they have something for me, someone who is looking to hire a recent graduate.
                            Luckily, one of my close friend Seeja asked her friend Kreety who was working on a real estate company and thankfully they were looking to hire someone in one of their positions.
                        </p>
                            <p> I worked as a Technical Support Specialist in a real estate company, the position was not really what I aimed to do in the
                                first place but it definitely taught me valuable knowledge for my career. I was shy, timid and honestly I never thought that
                                I was going to get this job but hey, you never know until you try. I am grateful to my mentor who gave me a chance to
                                prove myself. There is one thing I am certain about in my life, that is if you trust me and motivate me I am gonna give my
                                100% to that company for sure. I am very loyal and honest to the person who sees that I can become someone great.
                                Mentoring is like watering a plant and spreading love. If you discourage and spread hate and didn’t water the plant it is
                                never gonna grow. That was a huge opportunity for me and I gave my 100% to the company and I learned and grew immensely.
                                However, my dreams had other things in store for me. I wanted to be a developer and my mind and thoughts didn’t let me align
                                to the job. I did it for a year and started to lose interest as I wasn’t happy doing that anymore. I started to make excuses
                                and was not able to give my 100% and I knew it was time for me to move on and go after the dream that I was holding off.
                                The dream of becoming a web developer to program a website of my own. As scary it may sound I left a job and started to chase
                                my dream as a web developer. I used to make excuses that I do not have time, I do not have money and I do not know how to.
                                The truth is nobody has it figured out and those excuses will only hold you back. I am very grateful towards each and everyone who
                                had a role to play in my life. I understand that life is a journey and you will only learn from your mistakes so do not be
                                afraid to take the risk. Keep smiling, be grateful, support and motivate one another that is the only way you can go ahead in life. </p>
                        </p>
                        </div>
                    </div>
                </div>




            </div>
        );
    }
}


export default About;
