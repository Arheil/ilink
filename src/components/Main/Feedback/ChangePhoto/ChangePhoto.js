import img1 from '../../../../assets/image/img1.png';

const ChangePhoto = ({id}) => {
    switch (id) {
        case 'Буба':
            return img1

        case 'Илья':
            return '../../assets/image/emptyImage.svg'

        case 'Юрина':
            return '../../assets/image/img2.png'

        case 'Дмитрий':
            return '../../assets/image/img3.png'

        case 'empty':
            return '../../assets/image/emptyImage.svg'
    }
}

export default ChangePhoto;