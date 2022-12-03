import { useNetwork } from "wagmi"


interface IToastify {
    message:string 
    txnHash:string
}

const Toastify = ({message, txnHash}:IToastify)=> {
    const {chain} = useNetwork()
    const explorer = chain?.blockExplorers?.default.url
    return <>
       <div className="text-center">
            {" "}
            {message}
            {txnHash && (
              <p>
                <a
                  href={`${explorer}/tx/${txnHash}`}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-secondary"
                  style={{
                    textDecoration: "underline",
                    fontSize: "14px",
                    marginBottom: "-3rem!important",
                    marginTop: "1.5rem",
                  }}
                >
                  check here for transaction details
                </a>
              </p>
            )}
          </div>
    </>
}

export default Toastify

export const toastContent = (msg:string, hash:string)=> <Toastify message={msg} txnHash={hash} />