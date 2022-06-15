import React, { useState } from "react";

function InfoECComponent() {
  const [closebtn, setClosebtn] = useState(true);

  return (
    <>
      {closebtn ? (
        <>
          <div className="ease-in-out duration-300 text-center justify-items-center items-center mx-auto shadow-md rounded-sm fixed inset-x-0 bottom-0 w-11/12 h-fit lg:w-1/3 z-50">
            <header className="w-full bg-blue-500 rounded-t w-full flex justify-between items-center h-12">
              <div className="w-[90%]">
                <h1 className="text-white ml-14 font-semibold">ຂໍ້ມູນຄ່າເຊັນເຊີ EC</h1>
              </div>
              <div className="w-[10%]">
                <span onClick={() => setClosebtn(!closebtn)} className="text-3xl cursor-pointer text-white lg:px-4">&times;</span>
              </div>
            </header>
            <div className="relative overflow-y-auto h-full rounded-b bg-white">
                <p className="px-5 py-2 text-justify">
                    ຄ່າໄຟຟ້າບັນຈຸ ( Ec =  Electro Conductivity).
                    ແມ່ນການນຳກະແສໄຟຟ້າ ເກື່ອ ຫຼື ສານເຄມີອື່ນໆທີລະລາຍໃນນໍ້າ ເຊິ່ງຊ່ວຍໃນການລະບຸຄວາມບໍລິສຸດຂອງນໍ້າ, ເພື່ອໃຫ້ຮູ້ປະລິມານແຮ່ທາດໃນນໍ້າ ແລະ ນໍ້າທີມີຄວາມບໍລິສຸດຫຼາຍຈະມີການຊັກນຳໄຟຟ້າຕໍ່າ. ຄ່າ Ec ແມ່ນມີຄວາມສຳຄັນໃນການບອກວ່າແຮ່ທາດໃນນໍ້ານັ້ນເໜາະສົມກັບການນຳໄປໃຊ້ໃນດ້ານໃດ.
                </p> 
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default InfoECComponent;