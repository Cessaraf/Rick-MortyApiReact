import Head from "next/head";
import DetailCharacter from "../../../components/DetailCharacter";
import ApiClient from "../../../config/apiClient";


const DetailCharacterPage = props => {

    return (
        <div className="main-detail">
            <Head>
                <title>{props.detail.name}</title>
            </Head>
            <DetailCharacter detail={props.detail}></DetailCharacter>
        </div>
    )
    
    
}


export async function getServerSideProps(context) {
    const { id } = context.query;
    const response = await ApiClient['get'](`/character/${id}`, { params : { id:id } });
    return { props : {detail: response.data} }
}

export default DetailCharacterPage;

