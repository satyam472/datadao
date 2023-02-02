import React from 'react'
import { Link } from 'react-router-dom';

const src = "https://www.youtube.com/embed/d15DP5zqnYE";

const courseDetails = () => {
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

                <iframe
                    width="560"
                    height="315"
                    src={src}
                    title="Youtube Player"
                    frameborder="0"
                    allowFullScreen
                />

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