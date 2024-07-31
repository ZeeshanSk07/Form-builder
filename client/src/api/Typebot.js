import axios from "axios";
const Backend_Url = "http://localhost:4000";

const CreateTypebot = async (formName, selectedbtn, userId, parent) => {
  try {
    const response = await axios.post(`/typebot/saveTypebot`, {
      formName,
      selectedbtn,
      userId,
      parent,
    });
    return response;
  } catch (err) {
    return {
      status: err.response ? err.response.status : 500,
      data: err.response
        ? err.response.data
        : { message: "Internal Server Error" },
    };
  }
};

const GetTypebots = async(userId, parent) => {
  try {
    const response = await axios.get(`
      /typebot/getTypebots/${userId}`,
      { params: { parent } }
    );
    return response.data;
  } catch (err) {
    return {
      status: err.response ? err.response.status : 500,
      data: err.response
        ? err.response.data
        : { message: "Internal Server Error" },
    };
  }
};


const UpdateTypebot = async (typebotId, formName, selectedbtn) => {
  try {
    const response = await axios.put(
      `/typebot/editTypebot/${typebotId}`,
      { formName, selectedbtn }
    );
    return response;
  } catch (err) {
    return {
      status: err.response ? err.response.status : 500,
      data: err.response
        ? err.response.data
        : { message: "Internal Server Error" },
    };
  }
};

const DeleteTypebot = async (typebotId) => {
  try {
    const response = await axios.delete(
      `/typebot/deleteTypebot/${typebotId}`
    );
    return response;
  } catch (err) {
    return {
      status: err.response ? err.response.status : 500,
      data: err.response
        ? err.response.data
        : { message: "Internal Server Error" },
    };
  }
};

const GetshareBot = async(typebotId) =>{
  try {
    const response = await axios.get(`/typebot/getsharebot/${typebotId}`);
    return response;
  } catch (err) {
    return {
      status: err.response? err.response.status : 500,
      data: err.response
       ? err.response.data
        : { message: "Internal Server Error" },
    };
  }
}

export { CreateTypebot, GetTypebots, UpdateTypebot, DeleteTypebot, GetshareBot };
