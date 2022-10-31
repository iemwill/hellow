import React, { Component } from "react";
import addWebAppAction from "../Backend/Cookies/addWebAppAction";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { InjectedConnector } from "@web3-react/injected-connector";

import { useWeb3React } from "@web3-react/core";

function Connect() {
	const { activate, deactivate } = useWeb3React();
	const Injected = new InjectedConnector({
		supportedChainIds: [1, 3, 4, 5, 42],
	});
	return (
		<section id="Connect">
			<div className="Connect">
				<button
					onClick={() => {
						activate(Injected);
					}}
				>
					Metamask
                </button>
            
           


			</div>
		</section>
	);
}

export default Connect;
