<template>
    <MainLayout>
        <a-form
            :model="formState"
            v-bind="layout"
            name="nest-messages"
            :validate-messages="validateMessages"
            @finish="onFinish"
        >
            <a-form-item
                :name="['user', 'name']"
                label="Name"
                :rules="[{ required: true }]"
            >
                <a-input v-model:value="formState.user.name" />
            </a-form-item>
            <a-form-item
                :name="['user', 'email']"
                label="Email"
                :rules="[{ type: 'email' }]"
            >
                <a-input v-model:value="formState.user.email" />
            </a-form-item>
            <a-form-item
                :name="['user', 'age']"
                label="Age"
                :rules="[{ type: 'number', min: 0, max: 99 }]"
            >
                <a-input-number v-model:value="formState.user.age" />
            </a-form-item>
            <a-form-item :name="['user', 'address']" label="Address">
                <a-input v-model:value="formState.user.address" />
            </a-form-item>

            <a-form-item :wrapper-col="{ ...layout.wrapperCol, offset: 8 }">
                <a-button type="primary" html-type="submit">Submit</a-button>
            </a-form-item>
        </a-form>
        <!--============== list ===================== -->
        <div v-if="loading">loading....</div>
        <a-table v-else :dataSource="dataSource" :columns="columns" />
    </MainLayout>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
import MainLayout from "../layout/mainLayout.vue";
import { useHomeView } from "../composables/useHomeView";
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const validateMessages = {
    required: "${label} is required!",
    types: {
        email: "${label} is not a valid email!",
        number: "${label} is not a valid number!",
    },
    number: {
        range: "${label} must be between ${min} and ${max}",
    },
};

const formState = reactive({
    user: {
        name: "",
        age: undefined,
        email: "",
        website: "",
        introduction: "",
    },
});
const columns = [
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "Email",
        dataIndex: "email",
        key: "email",
    },
    {
        title: "Age",
        dataIndex: "age",
        key: "age",
    },
    {
        title: "Address",
        dataIndex: "address",
        key: "address",
    },
];
const dataSource = [
    {
        key: "1",
        name: "Mike",
        email: "Mike@yopmail.com",
        age: 32,
        address: "10 Downing Street",
    },
    {
        key: "2",
        name: "John",
        email: "John@yopmail.com",
        age: 42,
        address: "10 Downing Street",
    },
];
//================ Composable ===================
const {loading,result}=useHomeView()
console.log(loading,result)
//==================== Functions =======================
const onFinish = (values: any) => {
    console.log("Success:", values);
};
</script>
