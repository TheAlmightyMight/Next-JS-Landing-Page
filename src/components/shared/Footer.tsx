import React from 'react'

import { TheBoxIcon } from '../icons/TheBox'
import { Twitter } from '../icons/Twitter'
import { FacebookIcon } from '../icons/FacebookIcon'
import { LinkedIn } from '../icons/LinkedIn'

export const Footer: React.FC = () => {
	return (
		<footer className='footer'>
			<div className='footer__wrapper'>
				<div className='footer__info'>
					<div className='footer__first-part'>
						<div className='footer__contacts'>
							<address className='footer__contacts-item'>
								<span className='footer__contacts-item-name'>Address:</span>
								6391 Elgin St. Celina, Delaware 10299
							</address>

							<address className='footer__contacts-item'>
								<span className='footer__contacts-item-name'>Address: </span>
								<a href='tel:+8411022703'>+84 1102 2703</a>
							</address>

							<address className='footer__contacts-item'>
								<span className='footer__contacts-item-name'>Address:</span>
								hello@thebox.com
							</address>
						</div>
						<div className='footer__logo'>
							<TheBoxIcon />
						</div>
					</div>

					<div className='footer__second-part'>
						<div className='footer__newsletter'>
							<h4 className='footer__newsletter-heading'>Newsletter:</h4>

							<form className='footer__newsletter-form'>
								<input
									placeholder='Your email here'
									type='text'
									className='footer__newsletter-form-input'
								/>

								<button className='footer__newsletter-form-btn'>
									Subscribe
								</button>
							</form>
						</div>

						<div className='footer__social'>
							<h4 className='footer__social-heading'>Social:</h4>

							<div className='footer__social-icons'>
								<div className='footer__social-icons-item'>
									<FacebookIcon />
								</div>

								<div className='footer__social-icons-item'>
									<LinkedIn />
								</div>

								<div className='footer__social-icons-item'>
									<Twitter />
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='footer__rights'>
					<p className='footer__rights-text'>
						TheBox Company © 2022. All Rights Reserved
					</p>
				</div>
			</div>
		</footer>
	)
}
