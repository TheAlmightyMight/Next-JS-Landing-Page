import React from 'react'

export const ReachOut: React.FC = () => {
	return (
		<section
			id='Contact'
			className='contacts'
		>
			<div className='contacts__wrapper'>
				<form className='contacts__form'>
					<fieldset className='contacts__form-wrapper'>
						<legend className='contacts__info'>
							What can we do for you? <br></br>
							<span className='contacts__info-subtitle'>
								We are ready to work on a project of any complexity, whether
								it’s commercial or residential.
							</span>
						</legend>

						<input
							placeholder='Your name'
							type='text'
							className='contacts__form-input'
						/>
						<input
							type='email'
							className='contacts__form-input'
							placeholder='Email'
						/>
						<input
							placeholder='Reason for contacting'
							type='text'
							className='contacts__form-input'
						/>
						<input
							placeholder='Phone'
							type='tel'
							className='contacts__form-input'
						/>

						<textarea
							name=''
							id=''
							className='contacts__form-text-area'
							placeholder='Message'
						></textarea>

						<button
							className='contacts__btn'
							type='submit'
						>
							Submit
						</button>
					</fieldset>
				</form>
			</div>
		</section>
	)
}
