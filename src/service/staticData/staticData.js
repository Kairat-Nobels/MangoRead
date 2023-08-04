//я решил что статичные данные если будут в отдельной папке то будет более удобно потом разобраться

//header
import logohead from '../../media/images/header/Logo.svg'
import search from '../../media/images/header/lupa.svg'
import avatar from '../../media/images/header/avatar.svg'
//footer
import FacebookIcon from '../../media/images/footer/Facebook.svg'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'

//filter
import back from '../../media/images/filter/arrowBack.svg'

// card
import anime from '../../media/images/card/cardAnime.png'
// pagination
import iconBack from '../../media/images/pagination/arrowBack.svg'
import iconForward from '../../media/images/pagination/arrowForward.svg'
// infoPage
import backIcon from '../../media/images/info/arrowBackInfo.svg'
import animeIcon from '../../media/images/info/animeIcon.jpg'
// modal
import krestik from '../../media/images/modal/krestik.svg'
export const dataHeader = {
  logohead,
  siteName: 'MangoRead',
  slogan: 'Читай мангу с нами',
  search,
  placeHold: 'Placeholder',
  buttons: {
    signIn: 'Войти',
    singUp: 'регистрация'
  },
  profil: {
    avatar,
    name: 'Alex Miller'
  }
}

export const dataFooter = {
  logohead,
  siteName: 'MangoRead',
  slogan: 'Читай мангу с нами',
  snLinks: [
    {
      icon: <img src={FacebookIcon} alt="FacebookIcon" />,
      title: 'Link One',
      url: 'https://t.me/kairat_nobels'
    },
    {
      icon: (
        <InstagramIcon
          sx={{
            width: 24,
            height: 24,
            color: 'secondary.forIcon',
            background: '#FFFFFF'
          }}
        />
      ),
      title: 'Link Two',
      url: 'https://instagram.com/kairat_nobels'
    },
    {
      icon: (
        <TwitterIcon
          sx={{
            width: 24,
            height: 24,
            color: 'secondary.forIcon',
            background: '#FFFFFF'
          }}
        />
      ),
      title: 'Link Three',
      url: 'https://t.me/kairat_nobels'
    }
  ],
  reserv: '©2022, All right reserved.',
  serviceLinks: [
    {
      title: 'Privacy Policy',
      url: 'https://t.me/kairat_nobels'
    },
    {
      title: 'Terms of Service',
      url: 'https://t.me/kairat_nobels'
    },
    {
      title: 'Cookies Settings',
      url: 'https://t.me/kairat_nobels'
    }
  ]
}

export const dataFilter = {
  changeTitle: 'Жанры',
  types: ['Манга', 'Манхва', 'Комиксы', 'Маньхуа'],
  inputText: {
    from: 'От 0',
    to: 'До 2022'
  },
  icon: {
    back
  },
  genre: Array(20).fill('Героическое фэнтези')
}

export const dataCards = {
  card: Array(15).fill({
    year: 2000,
    anime,
    name: 'Название аниме оно может быть ...'
  })
}

//pagination Icons
export const dataPagIcon = {
  iconBack,
  iconForward
}

export const dataInfoPage = {
  backIcon,
  animeIcon,
  backTitle: 'Назад',
  name: 'Название манги',
  info: 'Информация:',
  type: 'Тип:',
  year: 'Год:',
  genre: 'Жанр:',
  genres:
    'Юри,Повседневность, Постапокалиптика, Приключения, Психология, Романтика, Сверхъестественное',
  synop: 'Синопсис',
  synopTitle:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id. Praesent lorem orci, mattis non efficitur id, ultricies vel nibh. Sed volutpat lacus vitae gravida viverra. Fusce vel tempor elit. Proin tempus, magna id scelerisque vestibulum, nulla ex pharetra sapien, tempor posuere massa neque nec felis. Aliquam sem ipsum, vehicula ac tortor vel, egestas ullamcorper dui. Curabitur at risus sodales, tristique est id, euismod justo. Mauris nec leo non libero sodales lobortis. Quisque a neque pretium, dictum tellus vitae, euismod neque. Nulla facilisi.',
  comment: Array(10).fill({
    nick: 'Имя,Никнейм',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet.'
  })
}

export const dataModal = {
  krestik,
  singIn: 'Вход',
  singUp: 'Регистрация',
  addImg: 'добавить фото',
  SignInForm: {
    checkBox: 'Запомнить меня',
    inp1: 'username',
    inp2: 'password',
    btn: 'Войти'
  },
  SignUpform: {
    username: 'username',
    nickname: 'nickname',
    image: 'image_file',
    password: 'password',
    errorLength: 'Ensure this field has at least 10 characters.',
    erroPassord: 'Ensure this field has at least 8 characters.',
    errorField: 'This field may not be blank.',
    errorImg: 'Submit photo'
  }
}
