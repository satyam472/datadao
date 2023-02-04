import React from 'react'
import { Link } from 'react-router-dom';

const src = "https://youtu.be/-mJFZp84TIY";

const courseDetails = (course) => {


    return (
        <>
            <div className="text-center sticky-top container-fluid bg-dark text-white">
                <h2 className='mt-3'>Publish Your Video!</h2>
                <Link to='/add-videos'>
                    <button className='btn mt-3' style={{ background: "white", color: "black", marginRight: "10px", cursor: "pointer", marginBottom: "10px" }}>
                        Add Videos
                    </button>
                </Link>
            </div>

            <div className='text-center'>

                <header>
                    <hgroup>
                        <h1>The Road to Web3</h1>
                    </hgroup>
                </header>

                {/* <iframe
                    width="560"
                    height="315"
                    src={src}
                    title="Youtube Player"
                    frameborder="0"
                    // allowFullScreen
                /> */}
                {/* <img src='https://assets-global.website-files.com/6171e9fea621c60456b9f9ad/62cc4c57a212fe57e2e0cbbb_road-to-web3.png' width="560" height="315"></img> */}
                <div className="card" style="width: 18rem;">
                    <img src="https://assets-global.website-files.com/6171e9fea621c60456b9f9ad/62cc4c57a212fe57e2e0cbbb_road-to-web3.png" class="card-img-top" alt="img"></img>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                <section>

                    <p>The Road to Web3 is a 10-week, self-paced program to bring you from Beginner to Advanced as a Web3 Blockchain Developer.</p>

                    <p>Web3 University is partnering with Alchemy to bring you the best community-driven course in blockchain development.</p>

                    <details>
                        <summary>You’ll build practical skills including:</summary>
                        <ul>
                            <li>How to Develop an NFT Smart Contract (ERC721)</li>
                            <li>How to Build a DeFi dApp</li>
                            <li>How to Make On-Chain NFTs</li>
                            <li>How to Build a Staking dApp</li>
                            <li>How to Build an NFT Marketplace</li>
                            <li>How to Build a Betting Game on Optimism</li>
                        </ul>
                    </details>

                    <button>Track Now</button>

                </section>

            </div>
        </>
    );
};

export default courseDetails