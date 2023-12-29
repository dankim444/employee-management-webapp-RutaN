import axios from 'axios';

// Define base API URL
const API_URL = 'http://localhost:8000'; //WE NEED TO CHANGE IT TO http://localhost:8000

// Common headers (assuming you have token stored in local storage)
const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
};

// Define axios CRUD operations for Employees

// CREATE Employee (Human Talent only)
export const createEmployee = (employeeData) => {
    return axios.post(`${API_URL}/hr/employees`, employeeData, config)
      .then(response => response.data)
      .catch(error => {
        console.error('Failed to create employee:', error);
        throw error; // Re-throw the error so it can be caught downstream
      });
};

// READ a specific Employee by id (Employee, Human Talent, Legal)
export const getEmployeeById = (id) => {
    return axios.get(`${API_URL}/employee/employees/${id}`, config)
      .then(response => response.data)
      .catch(error => {
        console.error('Failed to fetch employee:', error);
        throw error;
      });
};

// READ a specific Employee by portfolio (Employee, Human Talent, Legal)
export const getEmployeeByPortfolio = (portfolio) => {
  return axios.get(`${API_URL}/employee/employees/${portfolio}`, config)
    .then(response => response.data)
    .catch(error => {
      console.error('Failed to fetch employee:', error);
      throw error;
    });
};

// READ a specific Employee by last name (Employee, Human Talent, Legal)
export const getEmployeeByLastName = (lastName) => {
  return axios.get(`${API_URL}/employee/employees/${lastName}`, config)
    .then(response => response.data)
    .catch(error => {
      console.error('Failed to fetch employee:', error);
      throw error;
    });
};

// READ a specific Employee by first name (Employee, Human Talent, Legal)
export const getEmployeeByFirstName = (firstName) => {
  return axios.get(`${API_URL}/employee/employees/${firstName}`, config)
    .then(response => response.data)
    .catch(error => {
      console.error('Failed to fetch employee:', error);
      throw error;
    });
}

// READ a specific Employee by join date (Employee, Human Talent, Legal)
export const getEmployeeByJoinDate = (joinDate) => {
  return axios.get(`${API_URL}/employee/employees/${joinDate}`, config)
    .then(response => response.data)
    .catch(error => {
      console.error('Failed to fetch employee:', error);
      throw error;
    });
}

// READ a specific Employee by email (Employee, Human Talent, Legal)
export const getEmployeeByEmail = (email) => {
  return axios.get(`${API_URL}/employee/employees/${email}`, config)
    .then(response => response.data)
    .catch(error => {
      console.error('Failed to fetch employee:', error);
      throw error;
    });
}

// READ a specific Employee by dob (Employee, Human Talent, Legal)
export const getEmployeeByDOB = (dob) => {
  return axios.get(`${API_URL}/employee/employees/${dob}`, config)
    .then(response => response.data)
    .catch(error => {
      console.error('Failed to fetch employee:', error);
      throw error;
    });
}

// READ a specific Employee by gender (Employee, Human Talent, Legal)
export const getEmployeeByGender = (supervisorName) => {
  return axios.get(`${API_URL}/employee/employees/${supervisorName}`, config)
    .then(response => response.data)
    .catch(error => {
      console.error('Failed to fetch employee:', error);
      throw error;
    });
}

// READ a specific Employee by eps (Employee, Human Talent, Legal)
export const getEmployeeByEPS = (eps) => {
  return axios.get(`${API_URL}/employee/employees/${eps}`, config)
    .then(response => response.data)
    .catch(error => {
      console.error('Failed to fetch employee:', error);
      throw error;
    });
}

// READ a specific Employee by afp (Employee, Human Talent, Legal)
export const getEmployeeByAFP = (afp) => {
  return axios.get(`${API_URL}/employee/employees/${afp}`, config)
    .then(response => response.data)
    .catch(error => {
      console.error('Failed to fetch employee:', error);
      throw error;
    });
}

// READ a specific Employee by contract (Employee, Human Talent, Legal)
export const getEmployeeByContract = (contract) => {
  return axios.get(`${API_URL}/employee/employees/${contract}`, config)
    .then(response => response.data)
    .catch(error => {
      console.error('Failed to fetch employee:', error);
      throw error;
    });
}

// READ a specific Employee by status (Employee, Human Talent, Legal)
export const getEmployeeByStatus = (status) => {
  return axios.get(`${API_URL}/employee/employees/${status}`, config)
    .then(response => response.data)
    .catch(error => {
      console.error('Failed to fetch employee:', error);
      throw error;
    });
}

// READ a specific Employee by category (Employee, Human Talent, Legal)
export const getEmployeeByCategory = (category) => {
  return axios.get(`${API_URL}/employee/employees/${category}`, config)
    .then(response => response.data)
    .catch(error => {
      console.error('Failed to fetch employee:', error);
      throw error;
    });
}

// READ a specific Employee by position (Employee, Human Talent, Legal)
export const getEmployeeByPosition = (position) => {
  return axios.get(`${API_URL}/employee/employees/${position}`, config)
    .then(response => response.data)
    .catch(error => {
      console.error('Failed to fetch employee:', error);
      throw error;
    });
}

// READ a specific Employee by type (Employee, Human Talent, Legal)
export const getEmployeeByType = (type) => {
  return axios.get(`${API_URL}/employee/employees/${type}`, config)
    .then(response => response.data)
    .catch(error => {
      console.error('Failed to fetch employee:', error);
      throw error;
    });
}

// READ a specific Employee by role (Employee, Human Talent, Legal)
export const getEmployeeByRole = (role) => {
  return axios.get(`${API_URL}/employee/employees/${role}`, config)
    .then(response => response.data)
    .catch(error => {
      console.error('Failed to fetch employee:', error);
      throw error;
    });
}

// UPDATE a specific Employee (Employee, Human Talent)
export const updateEmployeeById = (id, updatedData) => {
    return axios.put(`${API_URL}/employee/employees/${id}`, updatedData, config)
      .then(response => response.data)
      .catch(error => {
        console.error('Failed to update employee:', error);
        throw error;
      });
};

// DELETE a specific Employee (Human Talent only)
export const deleteEmployeeById = (id) => {
    return axios.delete(`${API_URL}/hr/employees/${id}`, config)
      .then(response => response.data)
      .catch(error => {
        console.error('Failed to delete employee:', error);
        throw error;
      });
};

// READ all Employees (Human Talent, Legal)
export const getAllEmployees = () => {
    return axios.get(`${API_URL}/hr/employees`, config)
      .then(response => response.data)
      .catch(error => {
        console.error('Failed to fetch employees:', error);
        throw error;
      });
};


// Define axios CRUD operations for Contractors

// READ a specific contractor by id (Employee, Human Talent, Legal)
export const getContractorById = (id) => {
  return axios.get(`${API_URL}/contractors/${id}`, config)
    .then(response => response.data)
    .catch(error => {
      console.error('Failed to fetch employee:', error);
      throw error;
    });
};

// READ a specific Contractor by portfolio (Employee, Human Talent, Legal)
export const getContractorByPortfolio = (portfolio) => {
  return axios.get(`${API_URL}/contractors/${portfolio}`, config)
    .then(response => response.data)
    .catch(error => {
      console.error('Failed to fetch contractor:', error);
      throw error;
    });
};

// READ a specific Contractor by last name (Employee, Human Talent, Legal)
export const getContractorByLastName = (lastName) => {
  return axios.get(`${API_URL}/contractors/${lastName}`, config)
    .then(response => response.data)
    .catch(error => {
      console.error('Failed to fetch contractor:', error);
      throw error;
    });
};

// READ a specific Contractor by first name (Employee, Human Talent, Legal)
export const getContractorByFirstName = (firstName) => {
  return axios.get(`${API_URL}/contractors/${firstName}`, config)
    .then(response => response.data)
    .catch(error => {
      console.error('Failed to fetch contractor:', error);
      throw error;
    });
}

// READ a specific Contractor by join date (Employee, Human Talent, Legal)
export const getContractorByJoinDate = (joinDate) => {
  return axios.get(`${API_URL}/contractors/${joinDate}`, config)
    .then(response => response.data)
    .catch(error => {
      console.error('Failed to fetch contractor:', error);
      throw error;
    });
}

// READ a specific Contractor by email (Employee, Human Talent, Legal)
export const getContractorByEmail = (email) => {
  return axios.get(`${API_URL}/contractors/${email}`, config)
    .then(response => response.data)
    .catch(error => {
      console.error('Failed to fetch contractor:', error);
      throw error;
    });
}

// READ a specific Contractor by dob (Employee, Human Talent, Legal)
export const getContractorByDOB = (dob) => {
  return axios.get(`${API_URL}/contractors/${dob}`, config)
    .then(response => response.data)
    .catch(error => {
      console.error('Failed to fetch contractor:', error);
      throw error;
    });
}

// READ a specific Contractor by supervisor (Employee, Human Talent, Legal)
export const getContractorBySupervisor = (supervisorName) => {
  return axios.get(`${API_URL}/contractors/${supervisorName}`, config)
    .then(response => response.data)
    .catch(error => {
      console.error('Failed to fetch contractor:', error);
      throw error;
    });
}

// READ a specific Contractor by gender (Employee, Human Talent, Legal)
export const getContractorByGender = (gender) => {
  return axios.get(`${API_URL}/contractors/${gender}`, config)
    .then(response => response.data)
    .catch(error => {
      console.error('Failed to fetch contractor:', error);
      throw error;
    });
}

// READ a specific Contractor by committeeApprovalDate (Employee, Human Talent, Legal)
export const getContractorByCommitteeApprovalDate = (committeeApprovalDate) => {
  return axios.get(`${API_URL}/contractors/${committeeApprovalDate}`, config)
    .then(response => response.data)
    .catch(error => {
      console.error('Failed to fetch contractor:', error);
      throw error;
    });
}

// READ a specific Contractor by actNo (Employee, Human Talent, Legal)
export const getContractorByActNo = (actNo) => {
  return axios.get(`${API_URL}/contractors/${actNo}`, config)
    .then(response => response.data)
    .catch(error => {
      console.error('Failed to fetch contractor:', error);
      throw error;
    });
}

// READ a specific Contractor by contractNo (Employee, Human Talent, Legal)
export const getContractorByContractNo = (contractNo) => {
  return axios.get(`${API_URL}/contractors/${contractNo}`, config)
    .then(response => response.data)
    .catch(error => {
      console.error('Failed to fetch contractor:', error);
      throw error;
    });
}

// READ a specific Contractor by value (Employee, Human Talent, Legal)
export const getContractorByValue = (value) => {
  return axios.get(`${API_URL}/contractors/${value}`, config)
    .then(response => response.data)
    .catch(error => {
      console.error('Failed to fetch contractor:', error);
      throw error;
    });
}

// READ a specific Contractor by object (Employee, Human Talent, Legal)
export const getContractorByObject = (object) => {
  return axios.get(`${API_URL}/contractors/${object}`, config)
    .then(response => response.data)
    .catch(error => {
      console.error('Failed to fetch contractor:', error);
      throw error;
    });
}

// READ a specific Contractor by cdpNo (Employee, Human Talent, Legal)
export const getContractorByCDPNo = (cdpNo) => {
  return axios.get(`${API_URL}/contractors/${cdpNo}`, config)
    .then(response => response.data)
    .catch(error => {
      console.error('Failed to fetch contractor:', error);
      throw error;
    });
}

// READ a specific Contractor by costCenter (Employee, Human Talent, Legal)
export const getContractorByCostCenter = (costCenter) => {
  return axios.get(`${API_URL}/contractors/${costCenter}`, config)
    .then(response => response.data)
    .catch(error => {
      console.error('Failed to fetch contractor:', error);
      throw error;
    });
}

// READ a specific Contractor by terminationDate (Employee, Human Talent, Legal)
export const getContractorByTerminationDate = (terminationDate) => {
  return axios.get(`${API_URL}/contractors/${terminationDate}`, config)
    .then(response => response.data)
    .catch(error => {
      console.error('Failed to fetch contractor:', error);
      throw error;
    });
}

// READ a specific Contractor by rpc (Employee, Human Talent, Legal)
export const getContractorByRPC = (rpc) => {
  return axios.get(`${API_URL}/contractors/${rpc}`, config)
    .then(response => response.data)
    .catch(error => {
      console.error('Failed to fetch contractor:', error);
      throw error;
    });
}

// READ a specific Contractor by arl (Employee, Human Talent, Legal)
export const getContractorByARL = (arl) => {
  return axios.get(`${API_URL}/contractors/${arl}`, config)
    .then(response => response.data)
    .catch(error => {
      console.error('Failed to fetch contractor:', error);
      throw error;
    });
}

// READ a specific Contractor by eps (Employee, Human Talent, Legal)
export const getContractorByEPS = (eps) => {
  return axios.get(`${API_URL}/contractors/${eps}`, config)
    .then(response => response.data)
    .catch(error => {
      console.error('Failed to fetch contractor:', error);
      throw error;
    });
}

// READ a specific Contractor by afp (Employee, Human Talent, Legal)
export const getContractorByAFP = (afp) => {
  return axios.get(`${API_URL}/contractors/${afp}`, config)
    .then(response => response.data)
    .catch(error => {
      console.error('Failed to fetch contractor:', error);
      throw error;
    });
}

// READ a specific Contractor by observations (Employee, Human Talent, Legal)
export const getContractorByObservations = (observations) => {
  return axios.get(`${API_URL}/contractors/${observations}`, config)
    .then(response => response.data)
    .catch(error => {
      console.error('Failed to fetch contractor:', error);
      throw error;
    });
}

// READ a specific Contractor by type (Employee, Human Talent, Legal)
export const getContractorByType = (type) => {
  return axios.get(`${API_URL}/contractors/${type}`, config)
    .then(response => response.data)
    .catch(error => {
      console.error('Failed to fetch contractor:', error);
      throw error;
    });
}

// UPDATE a specific Contractor (Human Talent only)
export const updateContractorById = (id, updatedData) => {
    return axios.put(`${API_URL}/contractors/${id}`, updatedData, config)
      .then(response => response.data)
      .catch(error => {
        console.error('Failed to update contractor:', error);
        throw error;
      });
};

// READ all Contractors (Human Talent, Legal)
export const getAllContractors = () => {
    return axios.get(`${API_URL}/contractors`, config)
      .then(response => response.data)
      .catch(error => {
        console.error('Failed to fetch contractors:', error);
        throw error;
      });
};