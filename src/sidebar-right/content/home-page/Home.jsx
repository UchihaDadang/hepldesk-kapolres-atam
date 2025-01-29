import ModalHeader, { HeaderHome } from "../../../modal/ModalHeader";

export default function Home() {
    return (
        <div className="home-page p-0 m-0 ">
            <ModalHeader>
                <HeaderHome/>
            </ModalHeader>
            <div className="portfolio">
                <div className="wraper-bio h-50 d-flex rounded-2 shadow">
                    <div className="profile-bio h-100 p-3">
                        <div className="foto rounded-2"></div>
                    </div>
                    <div className="w-100 h-100 ">
                        <div className="w-100 h-50 d-flex">
                            <div className="w-25 h-100 m-0 pt-3">
                                <ul className="list-unstyled text-start m-0 p-0">
                                    <li>NIM</li>
                                    <li>Nama</li>
                                    <li>Email</li>
                                    <li>Fakultas</li>
                                    <li>Universitas</li>
                                </ul>
                            </div>
                            <div className="w-100 h-100 m-0 pt-3">
                            <ul className="list-unstyled text-start m-0 p-0">
                                    <li>: 09876</li>
                                    <li>: T Mahdalena</li>
                                    <li>: Lena123@gmail.com</li>
                                    <li>: Teknik Informatika</li>
                                    <li>: STILKES Cut Nyak Dien Langsa</li>
                                </ul>
                            </div>
                        </div>
                        <div className="wrap-note-bio w-100 h-50 m-0 text-start">
                            <div className="text-start rounded-2 p-1 h-100 w-100">
                                <p className="text-justify-custom">Lorem, ipsum dolor sit  amet amet  amet lagi amet  odio nisi nulla aperiam et, doloribus quis totam neque ipsum accusamus, ipsam iusto labore? Quo soluta </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}