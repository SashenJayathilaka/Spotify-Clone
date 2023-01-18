import Link from 'next/link'
import { useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

export default function Home() {
	const [open, setOpen] = useState(false)
	const [open1, setOpen1] = useState(false)
	const [open2, setOpen2] = useState(false)
	const setIsOpen = () => {
		setOpen(open === true ? false : true)
	}
	const setIsOpen1 = () => {
		setOpen1(open1 === true ? false : true)
	}
	const setIsOpen2 = () => {
		setOpen2(open2 === true ? false : true)
	}
	return (
		<div className='wrapper'>
			<header className='header'>
				<Link href='/MainPage'>
					<div className='spotify-logo'>
						<img
							src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png'
							style={{ width: '132px' }}
						/>
					</div>
				</Link>
				<div className='links'>
					<Link className='link' href={'/'}>
						Premium
					</Link>
					<Link className='link' href={'/'}>
						Справка
					</Link>
					<Link className='link' href={'/'}>
						Скачать
					</Link>
					|
					<Link className='link' href={'/'}>
						Зарегистрироваться
					</Link>
					<Link className='link' href={'/Login'}>
						Войти в аккаунт
					</Link>
				</div>
			</header>
			<div className='first-block'>
				<svg
					style={{ width: '286px', height: '573px' }}
					viewBox='0 0 290 590.58'
					aria-hidden='true'
					focusable='false'
					class='sc-dnORZt iZZwlB'
				>
					<path
						d='M36.28,0H253.72A36.28,36.28,0,0,1,290,36.27v518a36.28,36.28,0,0,1-36.28,36.27H36.28A36.28,36.28,0,0,1,0,554.31v-518A36.28,36.28,0,0,1,36.28,0Z'
						fill='#fff'
					></path>
					<path
						d='M125,25h40a3,3,0,0,1,0,6H125a3,3,0,0,1,0-6Z'
						fill='#231f20'
					></path>
				</svg>
				<img src='https://i.scdn.co/image/ab678e040000ed3aed58911aecc6dbc16949f40b' />
				<div className='h1button'>
					<h1>Слушайте миллионы треков бесплатно</h1>
					<button>СКАЧАТЬ БЕСПЛАТНУЮ ВЕРИСЮ SPOTIFY</button>
				</div>
			</div>
			<div className='secondBlock'>
				<h1>Преимущества Spotify</h1>
				<div className='secondBlockicons'>
					<div className='icons'>
						<img src='https://i.scdn.co/image/ab671c3d0000f430678067184805befd38aa0f57' />
						<p className='paragraph'>Любимый контент</p>
						<p className='string'>
							Слушайте любимые треки и находите новую музыку бесплатно.
						</p>
					</div>
					<div className='icons'>
						<img src='https://i.scdn.co/image/ab671c3d0000f430a6f822749d5c25c32ee31d66' />
						<p className='paragraph'>Подсказки для плейлистов</p>
						<p className='string'>
							Мы поможем составить плейлисты и предложим готовые подборки от
							музыкальных экспертов.
						</p>
					</div>
					<div className='icons'>
						<img src='https://i.scdn.co/image/ab671c3d0000f430eb43023b5332389f5094530d' />
						<p className='paragraph'>Рекомендации</p>
						<p className='string'>
							Расскажите, что вы любите, и мы подберем для вас музыку.
						</p>
					</div>
					<div className='icons'>
						<img src='https://i.scdn.co/image/ab671c3d0000f4309430062bc28461dc8fbde6bc' />
						<p className='paragraph'>Экономия трафика</p>
						<p className='string'>
							Включите режим экономии трафика в настройках и не беспокойтесь о
							расходах.
						</p>
					</div>
				</div>
			</div>
			<div className='thirdBlock'>
				<h2>Это бесплатно!</h2>
				<h2>Данные банковской карты указывать не нужно.</h2>
			</div>
			<div className='fourthBlock'>
				<h1 style={{ textAlign: 'center' }}>Есть вопросы?</h1>
				<div className='questions'>
					<div className='ques'>
						<div className='mainquestion' onClick={() => setIsOpen(true)}>
							<p>Как создать плейлист?</p>
							{open ? (
								<MdKeyboardArrowDown style={{ width: '24px' }} />
							) : (
								<MdKeyboardArrowUp style={{ with: '24px' }} />
							)}
						</div>
						{open && (
							<>
								<span>
									Хранить любимую музыку в плейлистах очень удобно. К тому же,
									ими можно делиться с друзьями.
								</span>
								<span>Чтобы создать плейлист:</span>
								<div className='quest'>
									<span>1. Выберите «Моя медиатека».</span>
									<span>2. Нажмите Создать плейлист.</span>
									<span>3. Укажите название.</span>
									<span>
										4. Начните добавлять треки, а мы будем предлагать похожую
										музыку.
									</span>
								</div>
							</>
						)}
					</div>
					<div className='ques'>
						<div className='mainquestion' onClick={() => setIsOpen1(true)}>
							<p>Как включить режим экономии трафика?</p>
							{open1 ? (
								<MdKeyboardArrowDown style={{ width: '24px' }} />
							) : (
								<MdKeyboardArrowUp style={{ with: '24px' }} />
							)}
						</div>
						<div className='quest'>
							{open1 && (
								<>
									<span>1. Нажмите Главная.</span>
									<span>2. Выберите Настройки.</span>
									<span>3. Нажмите Экономия трафика.</span>
									<span>4. Включите режим экономии трафика.</span>
								</>
							)}
						</div>
					</div>
					<div className='ques'>
						<div className='mainquestion' onClick={() => setIsOpen2(true)}>
							<p>Музыку можно слушать только вперемешку?</p>
							{open2 ? (
								<MdKeyboardArrowDown style={{ width: '24px' }} />
							) : (
								<MdKeyboardArrowUp style={{ with: '24px' }} />
							)}
						</div>
						{open2 && (
							<>
								<span>
									Треки в плейлистах со значком «Вперемешку» доступны только в
									случайном порядке.
								</span>
								<span>
									Если такого значка нет, вы можете включить любую композицию,
									просто нажав на нее.
								</span>
							</>
						)}
					</div>
				</div>
			</div>
			<div className='fifthBlock'>
				<h1>Готовы? Поехали!</h1>
				<button>СКАЧАТЬ БЕСПЛАТНУЮ ВЕРСИЮ SPOTIFY</button>
			</div>
			<div className='footer'>
				<Link href='/MainPage'>
					<div className='img'>
						<img
							src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png'
							style={{ width: '132px' }}
						/>
					</div>
				</Link>
				<div className='company'>
					<p>Компания</p>
					<Link className='p' href={'/'}>
						О нас
					</Link>
					<Link className='p' href={'/'}>
						Вакансии
					</Link>
					<Link className='p' href={'/'}>
						For the Record
					</Link>
				</div>
				<div className='community'>
					<p>Сообщества</p>
					<Link className='href' href={'/'}>
						Для исполнителей
					</Link>
					<Link className='href' href={'/'}>
						Для разработичков
					</Link>
					<Link className='href' href={'/'}>
						Реклама
					</Link>
					<Link className='href' href={'/'}>
						Для инвесторов
					</Link>
					<Link className='href' href={'/'}>
						Для вендоров
					</Link>
				</div>
				<div className='KPD'>
					<p>Полезные ссылки</p>
					<Link className='links' href={'/'}>
						Справка
					</Link>
					<Link className='links' href={'/'}>
						Веб-плеер
					</Link>
					<Link className='links' href={'/'}>
						Бесплатное мобильное приложение
					</Link>
				</div>
			</div>
		</div>
	)
}
