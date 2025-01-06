import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notify = (text, type) => {
    if (type === "success") {
        toast.success(text, {
            position: "top-left",
            style: { fontFamily: "IRANSansWeb" },
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,

        })

    }
    else if (type === "warn") {
        toast.warn(text, {
            position: "top-left",
            style: { fontFamily: "IRANSansWeb" },
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }
    else if (type === "error") {
        toast.error(text, {
            position: "top-left",
            style: { fontFamily: "IRANSansWeb" },
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }
    else if (type === "info") {
        toast.info(text, {
            position: "top-left",
            style: { fontFamily: "IRANSansWeb" },
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }
    else {
        toast(text, {
            position: "top-left",
            style: { fontFamily: "IRANSansWeb" },
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }
}