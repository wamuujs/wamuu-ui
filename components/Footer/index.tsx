import React from 'react';
import styles from './styles.less';
const classNames = require('classnames');

interface FooterProps {
	className?: string;
}

export default class Footer extends React.Component<FooterProps> {
	constructor(props: any) {
		super(props);
	}

	render() {
		const footerClass = classNames(
			this.props.className,
			{
				header: true
			},
			styles.footer
		);
		return <div className={footerClass}>Footer</div>;
	}
}
