import React from 'react';
import styles from './styles.less';

export default class Header extends React.Component {
	constructor(props: any) {
		super(props);
	}

	render() {
		return <div className={styles.div}>Header</div>;
	}
}
