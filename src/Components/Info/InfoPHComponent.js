import React, { useState } from "react";

function InfoPHComponent() {
  const [closebtn, setClosebtn] = useState(true);

  return (
    <>
      {closebtn ? (
        <>
          <div className="ease-in-out duration-300 text-center justify-items-center items-center mx-auto shadow-md rounded-sm fixed inset-x-0 bottom-0 w-11/12 h-fit lg:w-1/3 z-50">
            <header className="w-full bg-blue-500 rounded-t w-full flex justify-between items-center h-12">
              <div className="w-[90%]">
                <h1 className="text-white ml-14 font-semibold">ຂໍ້ມູນຄ່າເຊັນເຊີ pH</h1>
              </div>
              <div className="w-[10%]">
                <span onClick={() => setClosebtn(!closebtn)} className="text-3xl cursor-pointer text-white lg:px-4">&times;</span>
              </div>
            </header>
            <div className="relative overflow-y-auto h-full rounded-b bg-white">
                <p className="px-5 py-2 text-justify">
                    ຄ່າຄວາມເປັນກົດ-ດ່າງ ( pH = potential of hydrogen ).
                    ແມ່ນຄ່າທີ່ສະແດງປະລິມານຄວາມເຂັ້ມຂຸ້ນຂອງ Hydrogen ion (H+) ຖືກນໍາໃຊ້ເພື່ອບອກຄວາມເປັນກົດ - ເປັນດ່າງ ໃນນໍ້າວ່າມີຫຼາຍ ຫຼື ໜ້ອຍພຽງໃດ ເຊິ່ງຄ່າ pH ຈະຖືກກຳນົດເປັນຕົວເລກທີມີຄ່າເລີມຈາກ 0-14 ເພື່ອສະແດງປະລິມານຄວາມເຂັ້ມຂຸ້ນຂອງ Hydrogen ion (H+) ໃນນໍ້າ.
                    ດັ່ງນັ້ນ, ຄ່າ pH ຈະມີຂອບເຂດດັ່ງນີ້:
                </p> 
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default InfoPHComponent;